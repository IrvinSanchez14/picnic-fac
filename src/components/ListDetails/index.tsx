import React from 'react';
import './style.css'

interface IListDetailsProps {
	details: Array<any>;
	ref?: any;
}

const ListDetails = (props: IListDetailsProps) => {
	const { details } = props;

	return (
		<table id="customers">
			<thead>
				<tr>
					<th>Cantidad</th>
					<th>Descripcion</th>
					<th>Precio Unitario</th>
					<th>Ventas Afectas</th>
				</tr>
			</thead>
			<tbody>
				{details.map((item: any, index: number) => {
					return (
						<tr key={index}>
							<td>{item.cantidad}</td>
							<td>{item.product}</td>
							<td>{item.price}</td>
							<td>{item.total}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default ListDetails;
