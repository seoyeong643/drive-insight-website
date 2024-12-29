import { Shippo } from "shippo";

const shippo = new Shippo({
    apiKeyHeader: "shippo_test_dc44054ae8ac07dd845dada0bb9aff0de61838b6",
});

export const shippoTest = async () => {
    // const addressFrom: AddressCreateRequest = {
    //     name: "Ninad Kulkarni",
    //     street1: "6017 W Questa Dr",
    //     city: "Glendale",
    //     state: "AZ",
    //     zip: "85310",
    //     country: "US",
    // };

    // const addressTo: AddressCreateRequest = {
    //     name: "Yug Gulati",
    //     street1: "1821 E Fallen Leaf Ln",
    //     city: "Phoenix",
    //     state: "AZ",
    //     zip: "85024",
    //     country: "US",
    // };

    // const parcel: ParcelCreateRequest = {
    //     length: "11",
    //     width: "7",
    //     height: "3.4",
    //     distanceUnit: DistanceUnitEnum.Cm,
    //     weight: "81",
    //     massUnit: WeightUnitEnum.G,
    // };

    // const shipment = await shippo.shipments.create({
    //     addressFrom: addressFrom,
    //     addressTo: addressTo,
    //     parcels: [parcel],
    //     async: false,
    // });

    // console.log(shipment);

    const result = await shippo.carrierParcelTemplates.list("all", "ups");
    console.log(result);
};
