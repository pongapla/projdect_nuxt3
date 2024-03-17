import { uploadImage } from "../server/services/upload-file-service.ts";


export default defineEventHandler(async (event) => {
    const formData = await readMultiPartFormData(event);
    const file = formData?.length ? formData[0] : null;
    console.log('Test data >>>>>');
    if(file) {

    }
});