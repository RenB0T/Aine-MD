let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0816-4935-7107]
│ •  [0838-5370-7647]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
