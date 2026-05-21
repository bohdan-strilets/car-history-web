import { useState } from 'react';

import type { ComboboxParams } from './combobox.types';

export const useCombobox = ({ options, value, onChange }: ComboboxParams) => {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const selected = options.find((opt) => opt.value === value);

  const filtered = options.filter((opt) => opt.label.toLowerCase().includes(query.toLowerCase()));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (!open) setOpen(true);
    if (e.target.value === '') onChange('');
  };

  const handleFocus = () => {
    setQuery('');
    setOpen(true);
  };

  const handleSelect = (val: string) => {
    onChange(val);
    setOpen(false);
    setQuery('');
  };

  return {
    query,
    open,
    setOpen,
    selected,
    filtered,
    isEmpty: filtered.length === 0,
    handleInputChange,
    handleFocus,
    handleSelect,
  };
};
