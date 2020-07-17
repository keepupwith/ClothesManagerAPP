import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
const { Camera } = Plugins;
async function takePhoto() {
    try {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            //   source: CameraSource.Camera,
            resultType: CameraResultType.Base64
        });

        return image.base64String;
    }
    catch (e) {
        return null;
    }
}
export default takePhoto