import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

await imagemin(['./public/article_images/*.{JPG,jpg,png}'], {
	destination: './public',
	plugins: [
		imageminWebp({quality: 50})
	]
});

console.log('Images optimized');