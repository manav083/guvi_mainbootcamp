var Specs = {
    Dimensions:{
        Overall_Length: 3500,
        Overall_width: 1600,
        Overall_height: 1490,
        Wheelbase: 2360,
        Track_Width:{
            Front: 1405,
            Rear: 1400
        },
        Minimum_turning_radius: 4.5,
        Minimum_ground_clearance: 170
    },
    Capacities:{
        Seating_Capacity:5,
        Fuel_tank_capacity: 35
    },
    Engine:{
        Type: "KB-Series",
        Number_of_Cylinders: 3,
        Number_of_valves: 12,
        Capacity: 998,
        Bore_stroke: "73.0 * 79.5",
        Compression_ratio: "10:1",
        MAximum_power:"67/6200",
        Maximum_torque: "90/3500",
        Fuel_distribution: "Multipoint Injection"
    },
    Transmission:{
        Type: "5-Speed MT"
    },
    Chassis:{
        Steering: "Rack&Pinion,Power Assisted",
        Brakes:{
            Front:"Ventilated discs",
            Rear: "Drums"
        },
        Suspension:{
            Front:"MacPherson strut & coil spring",
            Rear: "Isolated trailing link & coil spring"
        },
        Shock_Absorbers:"Gas Filled",
        Tyre: "155/80R13",
        Weights:{
            kerb_weight: "860-880",
            Gross_vehicle_weight: 1320
        }
        
    }
};

console.log(Specs);