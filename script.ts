import './style.css';

const sizes = [72, 96, 120, 128, 144, 152, 180, 192, 384, 512];
const fileInput: HTMLInputElement = document.forms['file-form'].elements['file-input'];

const addImageAndDownloadButton = async (file: File, width: number, height: number) => {
  // 画像をリサイズする
  const image = new Image();
  const reader = new FileReader();

  reader.readAsDataURL(file);

  const imgSrc: string = await new Promise<string>((resolve) => {
    reader.onload = (e: ProgressEvent<FileReader>) => {
      resolve(e.target.result.toString());
    }
  });

  image.src = imgSrc;

  const canvas = await new Promise<HTMLCanvasElement>((resolve) => {
    image.onload = () => {
      const canvas: HTMLCanvasElement = document.createElement('canvas');
      canvas.setAttribute('width', width.toString());
      canvas.setAttribute('height', height.toString());

      var ctx = canvas.getContext('2d');

      // canvasに既に描画されている画像をクリア
      ctx.clearRect(0, 0, width, height);
      // canvasに画像を描画
      ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
      resolve(canvas);
    }
  });

  const downloadButton = document.createElement('button');
  downloadButton.textContent = `download icon-${width}x${height}.png`;

  downloadButton.addEventListener('click', () => {
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.setAttribute("download", `icon-${width}x${height}.png`);
    a.dispatchEvent(new MouseEvent("click"));
  });

  return {
    canvas,
    downloadButton,
  };
};

const onFileUpload = async (file: File) => {
  if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
    alert('cannot read file. jpeg or png is supported.')
    return;
  }

  const div = document.getElementById('image-area');

  // remove previous result
  div.textContent = '';

  for (const size of sizes) {
    const {canvas, downloadButton} = await addImageAndDownloadButton(file, size, size);
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const div4 = document.createElement('div');
    div2.appendChild(canvas);
    div3.appendChild(downloadButton);
    div4.appendChild(div2);
    div4.appendChild(div3);
    div4.style.border = 'solid 1px blue';
    div.appendChild(div4);
  }
}

fileInput.addEventListener('change', async () => {
  const file: File = fileInput.files[0];
  await onFileUpload(file);
});

const uploadArea = document.getElementById('upload-area') as HTMLDivElement;

uploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadArea.classList.add('drag');
});

uploadArea.addEventListener('dragleave', () => {
  uploadArea.classList.remove('drag');
});

uploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadArea.classList.remove('drag');
  const files = e.dataTransfer.files;
  fileInput.files = files;
  onFileUpload(files[0]);
});
