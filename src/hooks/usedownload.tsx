export const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Rajesh Niure Resume.pdf';
    link.download = 'Rajesh_Niure_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };