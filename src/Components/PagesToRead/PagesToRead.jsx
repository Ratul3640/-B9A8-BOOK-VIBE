import PropTypes from 'prop-types';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const PagesToRead = () => {
    return (
        <div className='container text-center mx-auto'>

            <BarChart
                width={1000}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>







        </div>
    );
};

export default PagesToRead;


PagesToRead.propTypes = {
    fill: PropTypes.any.isRequired,
    x: PropTypes.any.isRequired,
    y: PropTypes.any.isRequired,
    width: PropTypes.any.isRequired,
    height: PropTypes.any.isRequired
}