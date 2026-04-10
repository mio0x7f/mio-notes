import fs from 'node:fs'
import path from 'node:path'

const postsDir = path.resolve('posts')
fs.mkdirSync(postsDir, { recursive: true })

const now = new Date()
const date = now.toISOString().slice(0, 10)
const filePath = path.join(postsDir, `${date}.md`)

if (fs.existsSync(filePath)) {
  console.log(`Post already exists for ${date}`)
  process.exit(0)
}

const weekday = now.toLocaleDateString('zh-TW', { weekday: 'long' })
const content = `---
title: ${date} 的一點小記錄
date: ${date}
excerpt: 今天是 ${weekday}，留下一篇自動生成的文章，之後再慢慢補內容。
---

今天先留下一個小記號。

這篇是自動生成的每日文章，像是幫 blog 打卡一樣。之後可以再回來補上今天真正想寫的內容，讓這個地方慢慢變得更完整。
`

fs.writeFileSync(filePath, content)
console.log(`Created ${filePath}`)
