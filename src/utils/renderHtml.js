export function renderHtml(content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            body {
            height: 100vh;
            padding: 0 5px 0 5px;
            }
        </style>
    </head>
    <body>
        ${content}
    </body>
    </html>
    `;
}
