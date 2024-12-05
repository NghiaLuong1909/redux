import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../Redux/actions';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import { todoRemainingSelector } from '../Redux/selector';

export default function TodoList() {
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')

  const dispatch = useDispatch();
  const todoList = useSelector(todoRemainingSelector)
  
  const handleAdd = () => {
    dispatch(addTodo({
      id: uuid(),
      name: todoName,
      completed: false,
      priority: priority
    }));

    setTodoName('');
    setPriority('Medium')
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((i) => (<Todo key={i.id} id={i.id} name={i.name} priority={i.priority} completed={i.completed} />))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={(e) => setTodoName(e.target.value)} />
          <Select defaultValue="Medium" value={priority} onChange={(value) => setPriority(value)}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={() => handleAdd()}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
