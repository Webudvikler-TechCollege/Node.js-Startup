module.exports = (title, content) => `
    <!DOCTYPE html>
    <html lang="da">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device.width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie-edge" />
        <link rel="stylesheet" href="/css/style.css">
        <title>${title}</title>        
    </head>
    <body>
        <hr>
        <h1>${title}</h1>
        <section>${content}</section>
        <hr>
    </body>
    </html>
`;