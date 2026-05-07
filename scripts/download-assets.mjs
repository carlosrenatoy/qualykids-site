import { createWriteStream } from "node:fs";
import { mkdir } from "node:fs/promises";
import { basename, join } from "node:path";
import { Readable } from "node:stream";
import { finished } from "node:stream/promises";

const assets = [
  "https://www.qualykids.com.br/wp-content/uploads/2017/04/logo-qualykids-68x250.png",
  "https://www.qualykids.com.br/wp-content/uploads/2015/01/logo-qualykids-branco.png",
  "https://www.qualykids.com.br/wp-content/uploads/2015/01/logo-qualykids-branco-150x34.png",
  "https://www.qualykids.com.br/wp-content/uploads/2017/04/babbysitter-slider-sun.png",
  "https://www.qualykids.com.br/wp-content/uploads/2017/04/babbysitter-slider-girl.png",
  "https://www.qualykids.com.br/wp-content/uploads/2015/01/babbysitter-slider-cloud-1a.png",
  "https://www.qualykids.com.br/wp-content/uploads/2015/01/babbysitter-slider-cloud-2a.png",
  "https://www.qualykids.com.br/wp-content/uploads/2015/01/babbysitter-slider-cloud-3a.png",
  "https://www.qualykids.com.br/wp-content/uploads/2017/04/babbysitter-slider-ufo.png",
  "https://www.qualykids.com.br/wp-content/uploads/2021/03/botao2.png",
  "https://www.qualykids.com.br/wp-content/themes/kidscare/images/object_3_main.png",
  "https://www.qualykids.com.br/wp-content/themes/kidscare/images/curve_btn_banner_right.png",
  "https://i1.ytimg.com/vi/2WJhc_G8IKU/maxresdefault.jpg",
  "https://www.qualykids.com.br/wp-content/uploads/2017/04/favicon.ico",
];

const outputDir = join(process.cwd(), "public", "images", "qualykids");

await mkdir(outputDir, { recursive: true });

for (const url of assets) {
  const response = await fetch(url);

  if (!response.ok || !response.body) {
    throw new Error(`Failed to download ${url}: ${response.status}`);
  }

  const filename = basename(new URL(url).pathname);
  const outputPath = join(outputDir, filename);
  const stream = createWriteStream(outputPath);

  await finished(Readable.fromWeb(response.body).pipe(stream));
  console.log(`Downloaded ${filename}`);
}
