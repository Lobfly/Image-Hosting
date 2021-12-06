import { Layout, Button, message } from 'antd'
import { CloudUploadOutlined } from '@ant-design/icons'
import './Upload.css'
import { useState, useRef } from 'react'
import axios from '../../utils/axios'
import SizeFormate from '../../utils/SizeFormate.js'
const { Content } = Layout

function ImgInfos(props) {
	if (props.inputFile.current == null) {
		return null
	} else {
		return (
			<div className="img_infos_container">
				<div className="img_infos">
					<div>图片名称：{props.inputFile.current.files[0].name}</div>
					<div>图片大小：{SizeFormate(props.inputFile.current.files[0].size)}</div>
				</div>
			</div>
		)
	}
}
function UploadBox(props) {
	const imgURL = props.imgURL
	return (
		<div className="upload">
			<div
				className="upload-box"
				style={{ backgroundImage: `url("${imgURL}")` }}
			>
				<input
					type="file"
					title=""
					onChange={props.handleFile}
					ref={props.inputFile}
				/>
				<CloudUploadOutlined
					style={{
						fontSize: '120px',
						display: imgURL === '' ? 'block' : 'none',
					}}
				/>
			</div>
		</div>
	)
}
export default function Upload(props) {
	const [imgURL, setImgURL] = useState('')
	const [loading, setLoading] = useState(false)
	const inputFile = useRef(null)
	const handleFile = (e) => {
		if (e.target.files.length !== 0)
			//why
			setImgURL(window.URL.createObjectURL(e.target.files[0]))
	}
	const handleUpload = () => {
		if (inputFile.current.files.length === 0) {
			message.warning({
				content: '图片不允许为空',
				style: { marginLeft: '200px' },
			})
			return
		}
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 1000)
		const formdata = new FormData()
		formdata.append('file', inputFile.current.files[0])
		axios.post('upload', formdata).then(
			(res) => {
				message.info({ content: '上传成功', style: { marginLeft: '200px' } })
			},
			(err) => {
				message.error({ content: '上传失败', style: { marginLeft: '200px' } })
			}
		)
	}
	return (
		<Content>
			<UploadBox
				imgURL={imgURL}
				inputFile={inputFile}
				handleFile={handleFile}
			></UploadBox>
			<div className="upload_infos">
				<ImgInfos inputFile={inputFile}></ImgInfos>
				<Button
					type="primary"
					size="large"
					loading={loading}
					onClick={handleUpload}
				>
					上传
				</Button>
			</div>
		</Content>
	)
}
