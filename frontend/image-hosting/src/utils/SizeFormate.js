export default function SizeFormate(byte) {
    if(byte<1048576) {
        return `${(byte/1024).toFixed(2)}kb`
    } else {
        return `${(byte/1048576).toFixed(2)}mb`
    }
}