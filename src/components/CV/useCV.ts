

const useCV = () => {
    const downloadCV = async (language: string) => {

        const fileName = `${language}.pdf`;
        const fileUrl = `${import.meta.env.BASE_URL}CV/${fileName}`;

        try {
            const response = await fetch(fileUrl, { method: 'HEAD' });
            if (!response.ok) {
                return;
            }
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = "David_Ohhana_CV_" + fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            
        }
    };

   

    return {  downloadCV }
}

export default useCV