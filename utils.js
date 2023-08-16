/* 
controla um caso de uso de API Web padrão. 
Ele inclui a função getReqData(), que recupera
 dados do cliente no servidor.
*/

//utils.js
function getReqData(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = "";
            // escuta os dados enviados pelo cliente
            req.on("data", (chunk) => {
                // acrescenta a versão da string ao corpo
                body += chunk.toString();
            });
            // ouça até o final
            req.on("end", () => {
                // envia de volta os dados
                resolve(body);
            });
        } catch (error) {
            reject(error);
        }
    });
}
module.exports = { getReqData };