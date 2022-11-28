type HttpMethod = 'GET'|'POST'|'PATCH'|'DELETE';
export interface HttpOptions{
	hostname:string,
	path:string,
	method:HttpMethod
}
