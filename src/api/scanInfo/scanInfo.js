import request from '@/utils/request'

// 查询随申码列表
export function listScanInfo(query) {
  return request({
    url: '/scanInfo/scanInfo/list',
    method: 'get',
    params: query
  })
}

// 查询随申码详细
export function getScanInfo(id) {
  return request({
    url: '/scanInfo/scanInfo/' + id,
    method: 'get'
  })
}

// 新增随申码
export function addScanInfo(data) {
  return request({
    url: '/scanInfo/scanInfo',
    method: 'post',
    data: data
  })
}

// 修改随申码
export function updateScanInfo(data) {
  return request({
    url: '/scanInfo/scanInfo',
    method: 'put',
    data: data
  })
}

// 删除随申码
export function delScanInfo(id) {
  return request({
    url: '/scanInfo/scanInfo/' + id,
    method: 'delete'
  })
}
