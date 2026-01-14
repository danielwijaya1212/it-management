import { useEffect, useState } from "react";

export default function ListDevice() {
    const [devices, setDevices] = useState([]);
    const [newDevice, setNewDevice] = useState("");

    useEffect(() => {
        const saved = localStorage.getItem("devices");
        if (saved) {
            try {
                setDevices(JSON.parse(saved));
            } catch (e) {
                console.log('Error parsing devices from localStorage:', e);
            }
        }
    }, []);
    
    useEffect(() => {
        if (devices.length > 0) {
        localStorage.setItem("devices", JSON.stringify(devices));
        }
    }, [devices]);


    const addDevice = () => {
        const trimmed = newDevice.trim();
        if (trimmed === "") return;

        setDevices([...devices, trimmed]);
        setNewDevice("");
    }

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">List of Devices</h1>

            {/* INPUT TAMBAH DEVICE */}

            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={newDevice}
                    onChange={(e) => { setNewDevice(e.target.value); console.log('newDevice input:', e.target.value); }}
                    placeholder="Device Name"
                    className="border px-3 py-2 rounded-lg"
                />
                <button
                    onClick={addDevice}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                    Add
                </button>
            </div>

            {/* LIST DEVICE */}

            <ul className="space-y-2">
                {devices.map((d, index) => (
                    <li key={index} className="p-3 bg-gray-100 rounded-lg">
                        {d}
                    </li>
                ))}
            </ul>
        </div>
    );
}
