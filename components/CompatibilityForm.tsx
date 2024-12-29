"use client";

import { MenuItem, VehicleRecord } from "@/constants/Types";
import {
    CompatibilityFormData,
    compatibilitySchema,
} from "@/schema/compatibilitySchema";
import {
    getMakes,
    getModels,
    getVehicleOptions,
    getVehicleRecord,
    getYears,
} from "@/utils/compatibility";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

export default function CompatibilityForm() {
    const form = useForm<CompatibilityFormData>({
        resolver: zodResolver(compatibilitySchema),
        mode: "onBlur",
    });

    const onSubmit = () => {
        if (vehicleRecord) {
            alert(
                vehicleRecord.atvType === "EV"
                    ? "Sorry, we do not support EV yet."
                    : "Your vehicle is compatible with our device!",
            );
        }
    };

    const [year, make, model, option] = form.watch([
        "year",
        "make",
        "model",
        "option",
    ]);

    // State to store options
    const [makes, setMakes] = useState<MenuItem[]>([]);
    const [models, setModels] = useState<MenuItem[]>([]);
    const [vehicleOptions, setVehicleOptions] = useState<MenuItem[]>([]);
    const [vehicleRecord, setVehicleRecord] = useState<VehicleRecord | null>(
        null,
    );

    // Memoize the year options to prevent recalculating each render
    const years = useMemo(() => getYears(), []);

    const fetchMakes = useCallback(async () => {
        if (year) {
            const fetchedMakes = await getMakes(year);
            setMakes(fetchedMakes);
        }
    }, [year]);

    const fetchModels = useCallback(async () => {
        if (year && make) {
            const fetchedModels = await getModels(year, make);
            setModels(fetchedModels);
        }
    }, [year, make]);

    const fetchVehicleOptions = useCallback(async () => {
        if (year && make && model) {
            const fetchedOptions = await getVehicleOptions(year, make, model);
            setVehicleOptions(fetchedOptions);
        }
    }, [year, make, model]);

    const fetchVehicleRecord = useCallback(async () => {
        if (option) {
            const fetchedRecord = await getVehicleRecord(option);
            setVehicleRecord(fetchedRecord);
        }
    }, [option]);

    useEffect(() => {
        fetchMakes();
    }, [fetchMakes]);

    useEffect(() => {
        fetchModels();
    }, [fetchModels]);

    useEffect(() => {
        fetchVehicleOptions();
    }, [fetchVehicleOptions]);

    useEffect(() => {
        fetchVehicleRecord();
    }, [fetchVehicleRecord]);

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-3 md:flex-row">
                <FormField
                    control={form.control}
                    name="year"
                    render={({ field }) => (
                        <FormItem>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger value={field.value}>
                                        <SelectValue placeholder="Year" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {years.map((year) => (
                                        <SelectItem key={year} value={year}>
                                            {year}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="make"
                    render={({ field }) => (
                        <FormItem>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                disabled={!year}>
                                <FormControl>
                                    <SelectTrigger value={field.value}>
                                        <SelectValue placeholder="Make" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {makes.map((make) => (
                                        <SelectItem
                                            key={make.value}
                                            value={make.value}>
                                            {make.text}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="model"
                    render={({ field }) => (
                        <FormItem>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                disabled={!year || !make}>
                                <FormControl>
                                    <SelectTrigger value={field.value}>
                                        <SelectValue placeholder="Model" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {models.map((model) => (
                                        <SelectItem
                                            key={model.value}
                                            value={model.value}>
                                            {model.text}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="option"
                    render={({ field }) => (
                        <FormItem>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                disabled={!year || !make || !model}>
                                <FormControl>
                                    <SelectTrigger value={field.value}>
                                        <SelectValue placeholder="Option" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {vehicleOptions.map((option) => (
                                        <SelectItem
                                            key={option.value}
                                            value={option.value}>
                                            {option.text}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={!option}>
                    Check Compatibility
                </Button>
            </form>
        </Form>
    );
}
