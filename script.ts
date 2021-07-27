const sizes = [72, 96, 120, 128, 144, 152, 180, 192, 384, 512];
const fileInput: HTMLInputElement = document.forms['file-form'].elements['file-input'];

const addImageAndDownloadButton = (file: File, width: number, height: number) => {
  // 画像をリサイズする
  const image = new Image();
  const reader = new FileReader();
  reader.onload = function(e) {
    image.onload = function() {
      // サムネ描画用canvasのサイズを上で算出した値に変更
      const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
      canvas.setAttribute('width', width.toString());
      canvas.setAttribute('height', height.toString());

      var ctx = canvas.getContext('2d');
      // canvasに既に描画されている画像をクリア
      ctx.clearRect(0,0,width,height);
      // canvasにサムネイルを描画
      ctx.drawImage(image,0,0,image.width,image.height,0,0,width,height);
    }
    image.src = e.target.result.toString();
  }
  reader.readAsDataURL(file);
};

fileInput.addEventListener('change', () => {
  const file: File = fileInput.files[0];

  if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
    alert('cannot read file. jpeg or png is supported.')
    return;
  }

  const THUMBNAIL_WIDTH = 600; // 画像リサイズ後の横の長さの最大値
  const THUMBNAIL_HEIGHT = 600; // 画像リサイズ後の縦の長さの最大値

  addImageAndDownloadButton(file, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT);
});
