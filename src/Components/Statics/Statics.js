import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip} from 'recharts';

const Statics = () => {
    const questionData = useLoaderData();
    const {data} = questionData
    return (
        <div className='container'>
            <div className="row">
            <h2 className='mt-5 mb-5'>Totsl Questions Statics</h2>
            </div>
            <div className="row">
                <div className="col-md-8 offset-md-3">
                    <LineChart width={600} height={450} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default Statics;