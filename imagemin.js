import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

await imagemin(['./public/media_partners/*.{JPG,png}'], {
	destination: './public',
	plugins: [
		imageminWebp({quality: 50})
	]
});

console.log('Images optimized');