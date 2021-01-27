import React, { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import ButtonApp from '../../components/ButtonApp';
import FormApp from '../../components/FormApp';
import InputField from '../../components/InputFied';
import ListDetails from '../../components/ListDetails';
import SelectProduct from '../../components/SelectProduct';
import Title from '../../components/Title';

import json from '../../utils/product.json';
import ComponentToPrint from '../BillPrint';

const App = () => {
	const [inputCantidad, setInputCantidad] = useState('');
	const [inputCliente, setInputCliente] = useState('');
	const [inputDireccion, setInputDireccion] = useState('');
	const [inputDui, setInputDui] = useState('');
	const [valueSelect, setValueSelect] = useState('');
	const [list, setList] = useState<Array<any>>([]);
	const componentRef = useRef<any>();

	const handleClick = (e: any) => {
		e.preventDefault();
		console.log('The link was clicked.', valueSelect);

		const product = json.find((pro: any) => pro.id === parseInt(valueSelect));

		const billDetail = {
			cantidad: inputCantidad,
			product: product?.name,
			price: product?.price,
			total: parseInt(inputCantidad) * (product?.price || 0),
		};
		console.log('The link was clicked.', billDetail);
		setList([...list, billDetail]);
	};

	const handleChange = (e: any) => {
		
	}

	return (
		<div style={{textAlign: 'center'}}>
			<div>
				<Title title="Picnic Factura" />
			</div>
			<div>
				<FormApp>
					<div style={{marginBottom: 20}}>
						<label style={{marginRight: 38}}>Cliente:</label>
						<InputField
							type="text"
							name="cliente"
							value={inputCliente}
							onChange={(e: any) => setInputCliente(e.target.value)}
						/>
					</div>
					<div>
						<div style={{marginBottom: 5}}>
						<label style={{marginRight: 20}}>Direccion:</label>
						<InputField
							type="text"
							name="direccion"
							value={inputDireccion}
							onChange={(e: any) => setInputDireccion(e.target.value)}
						/>
						</div>
						<br />
						
						<label style={{marginRight: 20}}>DUI o NIT</label>
						<InputField
							type="text"
							name="DUI"
							value={inputDui}
							onChange={(e: any) => setInputDui(e.target.value)}
						/>
					</div>
					<div style={{marginTop: 20}}>
					<SelectProduct
						items={json}
						onChange={(e: any) => setValueSelect(e.target.value)}
					/>
					<InputField
						type="text"
						name="cantidad"
						value={inputCantidad}
						onChange={(e: any) => setInputCantidad(e.target.value)}
					/>
					<ButtonApp onSubmit={handleClick} text="agregar" />
					</div>
				</FormApp>
			</div>
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: 35}}>
				{list.length > 0 && (	<ListDetails details={list} />)}
			</div>
			<div>
				{list.length > 0 && (
					<ReactToPrint
						trigger={() => {
							return (
								<button>
									Imprimir factura
								</button>
							);
						}}
						content={() => componentRef.current}
					/>
				)}
			</div>
			<div style={{display: 'none'}}>
			<ComponentToPrint
				list={list}
				header={{
					cliente: inputCliente,
					direcction: inputDireccion,
					dui: inputDui,
				}}
				isVisible={true}
				ref={componentRef}
			/>
			</div>

		</div>
	);
};

export default App;
