import request from '@/utils/request'

// 查询行政区域列表
export function listRegionCode(query) {
  return request({
    url: '/region/regionCode/list',
    method: 'get',
    params: query
  })
}

// 查询行政区域详细
export function getRegionCode(id) {
  return request({
    url: '/region/regionCode/' + id,
    method: 'get'
  })
}

// 新增行政区域
export function addRegionCode(data) {
  return request({
    url: '/region/regionCode',
    method: 'post',
    data: data
  })
}

// 修改行政区域
export function updateRegionCode(data) {
  return request({
    url: '/region/regionCode',
    method: 'put',
    data: data
  })
}

// 删除行政区域
export function delRegionCode(id) {
  return request({
    url: '/region/regionCode/' + id,
    method: 'delete'
  })
}
