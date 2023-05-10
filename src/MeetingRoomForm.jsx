import React, { useState } from 'react';
import "rsuite/dist/rsuite.min.css";
import { Form, FlexboxGrid, SelectPicker, DatePicker, Input, Button } from 'rsuite';

const MeetingRoomForm = () => {
    const [formData, setFormData] = useState({
        tower: '',
        floor: '',
        room: '',
        date: null,
        time: null,
        comment: ''
    });

    const handleFormChange = (value, name) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log(JSON.stringify(formData));
    };

    const handleClear = () => {
        setFormData({
            tower: '',
            floor: '',
            room: '',
            date: null,
            time: null,
            comment: ''
        });
    };

    return (
        <Form fluid>
            <FlexboxGrid justify="space-between" align="middle">
                <FlexboxGrid.Item colspan={8}>
                    <SelectPicker
                        data={[{ value: 'A', label: 'A' }, { value: 'B', label: 'B' }]}
                        value={formData.tower}
                        onChange={(value) => handleFormChange(value, 'tower')}
                    />
                </FlexboxGrid.Item>

                <FlexboxGrid.Item colspan={8}>
                    <SelectPicker
                        data={Array.from({ length: 25 }, (_, i) => ({ value: i + 3, label: i + 3 }))}
                        value={formData.floor}
                        onChange={(value) => handleFormChange(value, 'floor')}
                    />
                </FlexboxGrid.Item>

                <FlexboxGrid.Item colspan={8}>
                    <SelectPicker
                        data={Array.from({ length: 10 }, (_, i) => ({ value: i + 1, label: i + 1 }))}
                        value={formData.room}
                        onChange={(value) => handleFormChange(value, 'room')}
                    />
                </FlexboxGrid.Item>
            </FlexboxGrid>

            <FlexboxGrid justify="space-between" align="middle">
                <FlexboxGrid.Item colspan={12}>
                    <DatePicker
                        value={formData.date}
                        onChange={(value) => handleFormChange(value, 'date')}
                    />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={12}>
                    <Input
                        type="time"
                        value={formData.time}
                        onChange={(value) => handleFormChange(value, 'time')}
                    />
                </FlexboxGrid.Item>
            </FlexboxGrid>

            <Input
                componentClass="textarea"
                value={formData.comment}
                onChange={(value) => handleFormChange(value, 'comment')}
            />

            <Button appearance="primary" onClick={handleSubmit}>Отправить</Button>
            <Button appearance="default" onClick={handleClear}>Очистить</Button>
        </Form>
    );
};

export default MeetingRoomForm;