import React from "react";
import Form from 'react-bootstrap/Form';
import { SelectOption } from "../models/SelectOption"

interface SelectProps {
  label: string;
  options: SelectOption[]
};

const MySelect: React.FC<SelectProps> = ({label, options}) => {
  return (
    <Form.Select aria-label={label}>
      <option>{label}</option>
      <option value="4">d4</option>
      <option value="6">d6</option>
      <option value="8">d8</option>
      <option value="10">d10</option>
      <option value="12">d12</option>
      <option value="20">d20</option>
      <option value="100">d100</option>
    </Form.Select>
  );
};

export default MySelect;