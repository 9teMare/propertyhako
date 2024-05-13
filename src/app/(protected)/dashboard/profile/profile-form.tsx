import { Button } from "@/components/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { isArray } from "lodash";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const passOptions: readonly [string, ...string[]] = [
    "Singaporean",
    "Permanent Resident",
    "Employment Pass",
    "S-Pass",
    "Work Permit",
    "Student Pass",
    "Other",
];

const formSchema = z.object({
    age: z
        .number()
        .min(18, {
            message: "You must be at least 18 years old to rent a property.",
        })
        .max(100, {
            message: "Sorry old man :(",
        }),
    gender: z.enum(["male", "female"]),
    occupation: z.string(),
    pass: z.enum(passOptions),
    budget: z.array(z.number()).length(2),
    pax: z.number().min(1, {
        message: "You must have at least 1 pax.",
    }),
    relationshipBetweenTenants: z.string().optional(),
    smoking: z.boolean(),
    pet: z.boolean(),
    startFrom: z.string().refine((v) => dayjs(v).isAfter(dayjs()), {
        message: "Start date must be in the future.",
    }),
    duration: z.number().min(0, {
        message: "Duration must be a positive number.",
    }),
    note: z.string().optional(),
});
export default function ProfileForm() {
    const [step, setStep] = useState(1);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            age: 18,
            budget: [1000, 3000],
            pax: 1,
        },
        mode: "all",
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    const renderStepOne = () => {
        return (
            <>
                <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                        <FormItem>
                            <div className="flex space-x-4 items-center w-full justify-between">
                                <FormLabel>Age</FormLabel>
                                <FormMessage />
                            </div>
                            <div className="flex flex-col space-y-6">
                                <FormControl>
                                    <Slider
                                        {...field}
                                        defaultValue={[18]}
                                        value={[field.value]}
                                        max={100}
                                        step={1}
                                        onValueChange={(v) => field.onChange(v[0])}
                                    />
                                </FormControl>
                            </div>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Gender</FormLabel>

                            <RadioGroup {...field} onValueChange={field.onChange}>
                                <FormControl>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="male" id="male" />
                                        <Label htmlFor="male">Male</Label>
                                    </div>
                                </FormControl>
                                <FormControl>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="female" id="female" />
                                        <Label htmlFor="female">Female</Label>
                                    </div>
                                </FormControl>
                            </RadioGroup>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="occupation"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Occupation</FormLabel>
                            <FormControl>
                                <Input {...field} onChange={(e) => field.onChange(e.target.value)} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="pass"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Pass</FormLabel>

                            <FormControl>
                                <Select {...field} onValueChange={field.onChange}>
                                    <SelectTrigger className="w-full" id="pass">
                                        <SelectValue placeholder="Select an pass" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {passOptions.map((option, index) => (
                                                <SelectItem key={index} value={option}>
                                                    {option}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex items-center space-x-20">
                    <FormField
                        control={form.control}
                        name="smoking"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                                <FormLabel>Do you smoke?</FormLabel>

                                <FormControl>
                                    <Checkbox className="size-5 rounded-none" checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="pet"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                                <FormLabel>Do you keep pet?</FormLabel>

                                <FormControl>
                                    <Checkbox className="size-5 rounded-none" checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Budget range (per month)</FormLabel>
                            <FormControl>
                                <Slider {...field} max={10000} step={50} onValueChange={(v) => field.onChange(v)} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </>
        );
    };

    const renderStepTwo = () => {
        return (
            <>
                <div className="flex flex-row space-x-12">
                    <FormField
                        control={form.control}
                        name="startFrom"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="birthday">Start from</FormLabel>
                                <FormControl>
                                    <Calendar
                                        mode="single"
                                        selected={dayjs(field.value).toDate()}
                                        onSelect={(v) => field.onChange(dayjs(v).format("YYYY-MM-DD"))}
                                        className="rounded-md border w-fit"
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="w-full space-y-12">
                        <FormField
                            control={form.control}
                            name="duration"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Duration (in years)</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            {...field}
                                            className={`${
                                                form.getFieldState("duration").invalid && "border-red-500 dark:border-red-900 focus-visible:ring-0"
                                            }`}
                                            onChange={(e) => {
                                                field.onChange(parseInt(e.target.value));
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="pax"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Pax</FormLabel>
                                    <FormControl>
                                        <Slider
                                            {...field}
                                            defaultValue={[18]}
                                            value={[field.value]}
                                            min={1}
                                            max={10}
                                            step={1}
                                            onValueChange={(v) => field.onChange(v[0])}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {form.getValues("pax") > 1 && (
                            <FormField
                                control={form.control}
                                name="relationshipBetweenTenants"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Relationship between tenants</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                className={`min-h-[11.3vh] ${
                                                    form.getFieldState("pax").invalid && "border-red-500 dark:border-red-900 focus-visible:ring-0"
                                                }`}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                    </div>
                </div>

                <FormField
                    control={form.control}
                    name="note"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Note to landlord (Optional)</FormLabel>
                            <FormControl>
                                <Textarea className="h-[25vh]" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </>
        );
    };

    const renderSummary = () => {
        return (
            <div className="flex flex-col">
                <h2 className="body-1 font-bold">Check your profile is correct</h2>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    {Object.entries(form.getValues()).map(([key, value], index) => (
                        <Card key={index} className={!value ? "hidden" : "block"}>
                            <CardHeader>
                                <CardTitle>{key.substring(0, 1).toUpperCase() + key.substring(1)}</CardTitle>
                                <CardDescription>{isArray(value) ? "$" + value.join("-") : value}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="overflow-y-auto justify-between flex flex-col h-full">
                <div className="flex flex-col px-1 space-y-12 h-full">
                    {step === 1 && renderStepOne()}

                    {step === 2 && renderStepTwo()}

                    {step === 3 && renderSummary()}
                </div>

                <Pagination>
                    <PaginationContent>
                        <PaginationItem
                            className={`cursor-pointer ${step === 1 && "cursor-not-allowed text-gray-400 hover:bg-transparent"}`}
                            onClick={() => step > 1 && setStep((prev) => prev - 1)}
                        >
                            <PaginationPrevious
                                className={`cursor-pointer ${
                                    step === 1 && "cursor-not-allowed text-gray-400 hover:bg-transparent hover:text-gray-400"
                                }`}
                            />
                        </PaginationItem>

                        <PaginationItem
                            className={`cursor-pointer ${step === 3 && "cursor-not-allowed text-gray-400"}`}
                            onClick={() => step < 3 && setStep((prev) => prev + 1)}
                        >
                            <PaginationNext
                                className={`cursor-pointer ${
                                    step === 3 && "cursor-not-allowed text-gray-400 hover:bg-transparent hover:text-gray-400"
                                }`}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>

                {step === 3 && (
                    <SheetFooter className="flex pt-8 flex-row w-full justify-between space-x-8">
                        <SheetClose className="w-[40%]">
                            <Button type="button" variant="outline" className="w-full">
                                Cancel
                            </Button>
                        </SheetClose>
                        <Button type="submit" className="w-[60%]">
                            Save Profile
                        </Button>
                    </SheetFooter>
                )}
            </form>
        </Form>
    );
}
