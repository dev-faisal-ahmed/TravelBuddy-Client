import * as Select from '@/components/ui/select';

type TProps = {
  placeholder: string;
  label?: string;
  options: string[];
  selectedOption: string | undefined;
  onSelectionChange: (val: string) => void;
};

export const CustomSelect = ({ placeholder, label, options }: TProps) => {
  return (
    <div className='space-y-2'>
      <h3 className='pl-2 text-sm font-semibold'>{label}</h3>
      <Select.Select>
        <Select.SelectTrigger>
          <Select.SelectValue placeholder={placeholder} />
        </Select.SelectTrigger>
        <Select.SelectContent>
          {options.map((option) => (
            <Select.SelectItem key={option} value={option}>
              {option}
            </Select.SelectItem>
          ))}
        </Select.SelectContent>
      </Select.Select>
    </div>
  );
};
