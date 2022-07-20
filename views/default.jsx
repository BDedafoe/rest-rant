const React = require('react')
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                {html.children}
            </body>
            <p></p>
            <footer class="footer">This app was created by Brittany Dedafoe. Follow me below!</footer>
            <div class="content">
            <div class="content-inside">
                 <a href="https://facebook.com/brittany.dedafoe">
                     <button id="add">Facebook</button></a>
                 <a href="https://instagram.com/deda_woah">
                     <button id="add">Instagram</button></a>
                 <a href="https://linkedin.com/in/brittany-dedafoe-991933199">
                     <button id="add">LinkedIn</button></a>
            </div>
            </div>
        </html>
    )
}

module.exports = Def