import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 150,
    duration: '30s'
};

export default function (){
    let res = http.get('http://localhost:8000/wp-json/wp/v2/pages');
    check(res, {
        'is status 200': (r) => r.status ===200
    });
};
