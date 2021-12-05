import { Layout, Button, message} from 'antd'
import { CloudUploadOutlined } from '@ant-design/icons'
import './Upload.css'
import { useState ,useRef } from 'react'
import http from '../../utils/http'
const { Content } = Layout
export default function Upload(props) {
	const [imgURL, setImgURL] = useState('')
    const [loading, setLoading] = useState(false)
    const inputFile = useRef(null)
	const handleFile = (e) => {
		setImgURL(window.URL.createObjectURL(e.target.files[0]))
	}
    const handleUpload = () => {
        if(inputFile.current.files.length === 0) {
            message.warning('图片不允许为空')
            return
        }
        setLoading(true)
        setTimeout(()=>{setLoading(false)},1000)
        const formdata = new FormData()
        formdata.append('file',inputFile.current.files[0])
        http.post('upload',formdata).then((res)=>{
            message.info('上传成功')
        },err=>{
            message.error('上传失败')
        })
    }
	return (
		<Content>
			<div className="upload">
				<div
					className="upload-box"
					style={{ backgroundImage: `url("${imgURL}")` }}
				>
					<input type="file" title="" onChange={handleFile} ref={inputFile}/>
					<CloudUploadOutlined style={{ fontSize: '120px' }} />
				</div>
			</div>
			<div className="upload_infos">
				<Button type="primary" size="large" loading={loading} onClick={handleUpload}>
					上传
				</Button>
			</div>
		</Content>
	)
}
