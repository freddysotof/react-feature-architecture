import { useState } from "react";
import dayjs from 'dayjs';
const initialValue = {
    startValue: null,
    endValue: null,
    endOpen: false
}

export const useRangePicker = () => {

    const [rangePickerState, setRangePickerState] = useState(initialValue)
    const { endValue, startValue } = rangePickerState;

    const disableDateBeforeToday = (current) => {
        return current && current < dayjs().endOf('day')
    }
    const isStartDateDisabled = (startValue) => {
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    }

    const isEndDateDisabled = (endValue) => {
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    }


    const onDateChange = (field, value) => {
        setRangePickerState({
            ...rangePickerState,
            [field]: value,
        });
    }

    const onStartDateChange = (value) => {
        onDateChange('startValue', value);
    }

    const onEndDateChange = (value) => {
        onDateChange('endValue', value);
    }

    const onStartOpenChange = (open) => {
        if (!open) {
            setRangePickerState({ ...rangePickerState, endOpen: true });
        } else {
            setTimeout(() => setTimeout(() => {
                var inputs = document.getElementsByClassName("ant-calendar-input");
                if (inputs.length > 0 && inputs[0]) {
                    inputs[0].blur();
                }
            }));
        }
    }

    const onEndOpenChange = (open) => {
        setRangePickerState({ ...rangePickerState, endOpen: open });
    }

    return {
        ...rangePickerState,
        disableDateBeforeToday,
        isStartDateDisabled,
        isEndDateDisabled,
        onStartDateChange,
        onEndDateChange,
        onStartOpenChange,
        onEndOpenChange

    }


}