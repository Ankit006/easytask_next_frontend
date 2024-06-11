import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import CustomToolTip from "./CustomToolTip";

const colors = [
    "transparent",
    "#ef4444",
    "#fb923c",
    "#14b8a6",
    "#6366f1",
    "#22c55e",
    "#eab308",
    "#a855f7",
];

export default function ColorPicker() {
    const [color, setColor] = useState("");
    return (
        <div>
            <input type="hidden" value={color} name="colorTag" />
            <Dialog>
                <DialogTrigger asChild>
                    <div>
                        <CustomToolTip text="Tag color">
                            <div
                                style={{
                                    backgroundColor: color === "" ? "transparent" : color,
                                }}
                                className="cursor-pointer w-4 h-4 rounded-full border border-white/55"
                                role="button"
                            ></div>
                        </CustomToolTip>
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-64">
                    <div className="grid grid-cols-4 gap-2 mt-4">
                        {colors.map((data) => (
                            <button
                                onClick={() => setColor(data)}
                                key={data}
                                style={{ backgroundColor: data }}
                                className="w-10 h-10 rounded-sm border border-white/45"
                            ></button>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
