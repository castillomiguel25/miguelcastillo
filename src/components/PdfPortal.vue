<template>
    <div>
      <input type="file" @change="onFileChange" accept=".doc, .docx">
      <button @click="convertToPDF">Convertir a PDF</button>
      <a v-if="pdfUrl" :href="pdfUrl" download="converted.pdf">Descargar PDF</a>
    </div>
  </template>
  
  <script>
  import { PDFDocument } from 'pdf-lib';
  
  export default {
    data() {
      return {
        selectedFile: null,
        pdfUrl: null,
      };
    },
    methods: {
      onFileChange(event) {
        this.selectedFile = event.target.files[0];
      },
      async convertToPDF() {
        if (this.selectedFile) {
          try {
            const reader = new FileReader();
            reader.onload = async () => {
              const byteArray = new Uint8Array(reader.result);
              const pdfDoc = await PDFDocument.create();
              const embeddedPdf = await PDFDocument.load(byteArray, { ignoreEncryption: true });
              const copiedPages = await pdfDoc.copyPages(embeddedPdf, embeddedPdf.getPageIndices());
              copiedPages.forEach((page) => pdfDoc.addPage(page));
  
              const pdfBytes = await pdfDoc.save();
              const blob = new Blob([pdfBytes], { type: 'application/pdf' });
              this.pdfUrl = URL.createObjectURL(blob);
            };
  
            reader.readAsArrayBuffer(this.selectedFile);
          } catch (error) {
            console.error('Error al convertir a PDF', error);
          }
        } else {
          console.error('Por favor, selecciona un archivo');
        }
      },
    },
  };
  </script>
  