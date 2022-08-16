const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');


const onGenerateSubmit = (e)=>{
    e.preventDefault();
    clearUi();
    
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    if(url ==''){
        alert('Enter A Url')
    }else{
        showSpinner();
        setTimeout(()=>{
            hideSpinner();
            generateQrCode(url,size);
            setTimeout(()=>{
                const saveUrl = qr.querySelector('img').src;
                createSaveBtn(saveUrl);
            },500)
        },1000)
    }
    console.log(url,size);
}

const clearUi = ()=>{
    qr.innerHTML='';
    let saveLink = document.getElementById('save-link');
    if(saveLink) saveLink.remove();
}
const generateQrCode = (url,size)=>{
    const qrCode = new QRCode('qrcode',{
        text:url,
        width:size,
        height:size
    });
}

const showSpinner = ()=>{
    document.getElementById('spinner').style.display='block';
}

const hideSpinner = ()=>{
    document.getElementById('spinner').style.display='none';
}

const createSaveBtn = (saveUrl)=>{
    const link = document.createElement('a');
    link.id= 'save-link';
    link.classList = 'bg-violet-500 rounded w-full text-white px-20 py-3 px-4 mt-5 hover:bg-violet-700';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
}



form.addEventListener('submit',onGenerateSubmit);