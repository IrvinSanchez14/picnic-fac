import React from 'react';
import { Styled } from './style';

interface IBillProps {
	list: any;
	header: any;
	isVisible?: boolean;
}

class ComponentToPrint extends React.Component<IBillProps> {
	render() {
		const { header, list, isVisible } = this.props;
		const subtotal = list.reduce((a: any, item: any) => a + item.total, 0);
		const propina = subtotal * 0.1;
		const totalBill = subtotal + propina;
		const date = new Date();
		console.log('this', totalBill);
		return (
			<div style={Styled.containerBill}>
				{isVisible && (
					<>
						<div>
							<div style={Styled.containerDate}>
								<span style={Styled.day}>{date.getDate()}</span>
								<span style={Styled.month}>{date.getMonth() + 1}</span>
								<span style={Styled.year}>{date.getFullYear()}</span>
							</div>
							<div style={Styled.containerPersonalDetails}>
								<div>{header.cliente}</div>
								<div style={Styled.direction}>{header.direccion}</div>
								<div style={Styled.dui}>{header.dui}</div>
							</div>
						</div>
						<div style={Styled.containerTable}>
							<table style={Styled.table}>
								<tbody>
									{list.map((item: any, index: number) => {
										return (
											<tr key={index}>
												<td style={Styled.tdCant}>{item.cantidad}</td>
												<td style={Styled.tdDescription}>{item.product}</td>
												<td style={Styled.tdPrice}>{item.price}</td>
												<td>{item.total}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
						<div style={Styled.containerFinal}>
							<div>{subtotal.toFixed(2)}</div>
							<div>{propina.toFixed(2)}</div>
							<div style={Styled.divSubTotal}>{subtotal.toFixed(2)}</div>
							<div style={Styled.divTotal}>{totalBill.toFixed(2)}</div>
						</div>
					</>
				)}
			</div>
		);
	}
}

export default ComponentToPrint;
