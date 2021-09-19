import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import API from '../../api';
import BigTitle from '../../components/bigTitle';
import Navbar from '../../components/navbar';

const DetailBlog = () => {
    const router = useRouter();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = router.query;

    useEffect(() => {
        id &&
            API.getBlogById(id)
                .then((data) => setData(data))
                .finally(() => setLoading(false));
    }, [id]);

    if (data?.status === 404 && !loading) {
        return <BigTitle>Not Found</BigTitle>;
    }

    return (
        <div>
            <Navbar />
            <BigTitle>{data?.updated_at}</BigTitle>
        </div>
    );
};

export default DetailBlog;