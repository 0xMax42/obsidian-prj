import { readFile } from 'fs/promises';

import {
    decodePDFRawStream,
    PDFDocument,
    PDFName,
    PDFRawStream,
} from 'pdf-lib';

import { DOMParser } from '@xmldom/xmldom';
import { TSinjex } from 'ts-injex';

const DOCMETA_NAMESPACE = 'https://0xmax42.io/ns/document/1.0/';

export interface DocumentReference {
    label: string;
    value: string;
}

export interface DocumentMetadata {
    senderName?: string;
    recipientName?: string;
    documentDate?: string;
    receivedDate?: string;
    references?: DocumentReference[];
}

export type ReadDocumentMetadata = (
    data: ArrayBuffer,
) => Promise<DocumentMetadata>;

/**
 * Reads custom document metadata from the XMP metadata stream of a PDF.
 *
 * @param filePath Path to the PDF file.
 * @returns Parsed document metadata.
 */
export const readDocumentMetadata: ReadDocumentMetadata = async (data) => {
    const pdf = await PDFDocument.load(data, {
        updateMetadata: false,
    });

    const metadataRef = pdf.catalog.get(PDFName.of('Metadata'));

    if (metadataRef === undefined) {
        return {};
    }

    const metadataObject = pdf.context.lookup(metadataRef);

    if (!(metadataObject instanceof PDFRawStream)) {
        throw new Error('PDF /Metadata object is not a raw stream');
    }

    // Decode the stream including any PDF compression/filtering.
    const xmpBytes = decodePDFRawStream(metadataObject).decode();
    const xmp = new TextDecoder('utf-8').decode(xmpBytes);

    const xml = new DOMParser().parseFromString(xmp, 'application/xml');

    if (xml === null) {
        throw new Error('Failed to parse XMP metadata');
    }

    const getValue = (name: string): string | undefined => {
        const element = xml
            .getElementsByTagNameNS(DOCMETA_NAMESPACE, name)
            .item(0);

        const value = element?.textContent?.trim();

        return value || undefined;
    };

    const metadata: DocumentMetadata = {};

    const senderName = getValue('senderName');
    const recipientName = getValue('recipientName');
    const documentDate = getValue('documentDate');
    const receivedDate = getValue('receivedDate');
    const referencesJson = getValue('referencesJson');

    if (senderName !== undefined) {
        metadata.senderName = senderName;
    }

    if (recipientName !== undefined) {
        metadata.recipientName = recipientName;
    }

    if (documentDate !== undefined) {
        metadata.documentDate = documentDate;
    }

    if (receivedDate !== undefined) {
        metadata.receivedDate = receivedDate;
    }

    if (referencesJson !== undefined) {
        metadata.references = JSON.parse(referencesJson) as DocumentReference[];
    }

    return metadata;
};
