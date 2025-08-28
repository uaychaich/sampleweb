module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var responseMessage = `<h2>Uay WebApp Naja</h2><p id="demo"></p><img src="https://uaystoragekiki.blob.core.windows.net/webimage/Jon_Snow_Season_8.png" alt="Jon Snow"><script type="text/javascript">var ip = location.host;document.getElementById('demo').innerHTML=ip + "<br/>" +Date();</script>`;
    if (req.query.name){responseMessage=responseMessage + "<br/><h2>Hello " + req.query.name + "</h2>";}
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage, headers: {"Content-Type": "text/html" }
    };
}
