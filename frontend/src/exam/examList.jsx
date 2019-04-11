import React from 'react';
import IconButton from '../template/iconButton';
export default props => {
	const renderRows = () => {
		const list = props.list || [];
		
		return list.map(exam => (
			
			<tr key={exam._id}>
				<td className={exam.done ? 'markAsDone' : ''}>{exam.name}</td>
				<td>{exam.type}</td>
				<td>{exam.date}</td>
				<td>
					<IconButton
						style="primary"
						icon="check"
						hide={exam.done}
						onClick={() => props.handleMarkAsDone(exam)}
					/>
					<IconButton
						style="success"
						icon="undo"
						hide={!exam.done}
						onClick={() => props.handleMarkAsPending(exam)}
					/>
					<IconButton
						style="danger"
						icon="trash-o"
						hide={!exam.done}
						onClick={() => props.handleRemove(exam)}
					/>
				</td>
			</tr>
		));
	};
	return (
		<table className="table">
			<thead>
				<tr>
					<th>Nome do paciente</th>
					<th>Tipo de exame</th>
					<th>Data do exame</th>
					<th className='tableActions'>Ações</th>
				</tr>
			</thead>
			<tbody>{renderRows()}</tbody>
		</table>
	);
};
