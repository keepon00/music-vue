import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
	url += (url.indexOf('?') < 0 ? '?' : '&') + params(data)
	return new Promise((resolve, reject) => {
		originJSONP(url, option, (err, data) => {
			if(!err) {
				resolve(data)
			}else{
				reject(err)
			}
		})
	})
}

function params(data) {
	var url = ''
	for (let k in data) {
		var value = data[k] !== 'undefined' ? data[k] : ''
		url += `&${k}=${encodeURIComponent(value)}`
	}
	return url ? url.substring(1) : ''
}
