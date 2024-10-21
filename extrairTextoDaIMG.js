
async function extrairTexto(filePath, apiKey) {
    try {
      // 1. Determinar o tipo MIME com base na extensão do arquivo
      const mimeType = getMimeType(filePath);
      if (!mimeType) {
        throw new Error("Tipo MIME não suportado para este arquivo.");
      }
  
  
      // 2. Converter o arquivo para base64
      const fileBuffer = await fetch(filePath).then(res => res.arrayBuffer());
      const base64File = Buffer.from(fileBuffer).toString("base64");
  
      // 3. Enviar o arquivo para a API Gemini
      const response = await fetch("https://api.openai.com/v1/extractions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${'AIzaSyDP4Z8fi_zWpPA1tWYiOjNNXa_0DzGnDUU'}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "file": base64File,
          "file_type": mimeType
        })
      });
  
  
      if (!response.ok) { // Lidar com erros de resposta HTTP
          const errorData = await response.json(); // Tentar obter detalhes do erro da API
          throw new Error(`Erro na requisição à API: ${response.status} - ${response.statusText}.  ${errorData.error ? JSON.stringify(errorData.error) : ""}`);
  
      }
  
  
  
      const data = await response.json();
  
      // 4. Extrair o texto da resposta, tratando diferentes formatos
      const extractedText = data.text || data.extracted_text || null; // Adaptação para diferentes versões da API
  
  
       if(extractedText == null && data.error){ // Lidar com erro da API mesmo com status 200.
         throw new Error(`Erro na extração do texto: ${JSON.stringify(data.error)}`);
       }
      
  
  
      return extractedText;
  
    } catch (error) {
      console.error("Erro:", error);
      throw error; // Repassar o erro para ser tratado onde a função for chamada.
    }
  }
  
  
  // Função auxiliar para obter o tipo MIME com base na extensão do arquivo
  function getMimeType(filePath) {
    const extension = filePath.split(".").pop().toLowerCase();
    switch (extension) {
      case "png": return "image/png";
      case "jpg": case "jpeg": return "image/jpeg";
      case "pdf": return "application/pdf";
      case "tiff": return "image/tiff";
        // Adicione outros tipos MIME conforme necessário
      default: return null;
    }
  }
  
  
  
  
  // Exemplo de uso:
  const apiKey = "AIzaSyDP4Z8fi_zWpPA1tWYiOjNNXa_0DzGnDUU"; // Substitua pela sua chave de API
  const filePath = "./reconhecimentoDeTexto/exemplo.png";
  
  extrairTexto(filePath, apiKey)
    .then(text => {
      console.log("Texto extraído:", text);
    })
    .catch(error => {
      console.error("Erro ao extrair texto:", error);
    });