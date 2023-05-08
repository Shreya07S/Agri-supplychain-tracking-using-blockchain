// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract registration {
    struct Crop {
        string name;
        uint256 area;
        string district;
    }

    mapping(address => Crop) public fasal;
    Crop[] public upaj;

    mapping(string => mapping(string => uint256)) public totalAreaByDistrict;

    string[] public haryanaDistricts = [
        "Ambala",
        "Bhiwani",
        "Charkhi Dadri",
        "Faridabad",
        "Fatehabad",
        "Gurugram",
        "Hisar",
        "Jhajjar",
        "Jind",
        "Kaithal",
        "Karnal",
        "Kurukshetra",
        "Mahendragarh",
        "Nuh",
        "Palwal",
        "Panchkula",
        "Panipat",
        "Rewari",
        "Rohtak",
        "Sirsa",
        "Sonipat",
        "Yamunanagar"
    ];

    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function registerCrop(
        string memory _name,
        uint256 _area,
        string memory _district
    ) public {
        require(
            keccak256(abi.encodePacked(_name)) ==
                keccak256(abi.encodePacked("wheat")),
            "Only wheat crops can be registered"
        );

        bool isValidDistrict = false;
        for (uint256 i = 0; i < haryanaDistricts.length; i++) {
            if (
                keccak256(bytes(haryanaDistricts[i])) ==
                keccak256(bytes(_district))
            ) {
                isValidDistrict = true;
                break;
            }
        }
        require(
            isValidDistrict == true,
            "Invalid district. Please provide a valid district from Haryana"
        );

        Crop memory newCrop = Crop(_name, _area, _district);
        fasal[msg.sender] = newCrop;
        upaj.push(newCrop);
        totalAreaByDistrict[_district][_name] += _area;
    }

    function getTotalAreaByDistrict(
        string memory _district,
        string memory _name
    ) public view returns (uint256) {
        return totalAreaByDistrict[_district][_name];
    }

    function estimateTotalProduce(string memory _name)
        public
        view
        returns (uint256)
    {
        uint256 totalArea = 0;
        for (uint256 i = 0; i < upaj.length; i++) {
            if (keccak256(bytes(upaj[i].name)) == keccak256(bytes(_name))) {
                totalArea += upaj[i].area;
            }
        }
        return totalArea * 24;
    }

    function estimateProduce(string memory _district, string memory _name)
        public
        view
        returns (uint256)
    {
        uint256 totalArea = totalAreaByDistrict[_district][_name];
        if (keccak256(bytes(_district)) == keccak256(bytes("Hisar"))) {
            return totalArea * 22;
        } else if (
            keccak256(bytes(_district)) == keccak256(bytes("Panchkula"))
        ) {
            return totalArea * 22;
        } else if (
            keccak256(bytes(_district)) == keccak256(bytes("Yamunanagar"))
        ) {
            return totalArea * 22;
        } else if (keccak256(bytes(_district)) == keccak256(bytes("Ambala"))) {
            return totalArea * 22;
        } else if (keccak256(bytes(_district)) == keccak256(bytes("Jhajjar"))) {
            return totalArea * 22;
        } else if (
            keccak256(bytes(_district)) == keccak256(bytes("Gurugram"))
        ) {
            return totalArea * 22;
        } else if (keccak256(bytes(_district)) == keccak256(bytes("Rewari"))) {
            return totalArea * 22;
        } else if (keccak256(bytes(_district)) == keccak256(bytes("Rohtak"))) {
            return totalArea * 22;
        } else if (keccak256(bytes(_district)) == keccak256(bytes("Palwal"))) {
            return totalArea * 22;
        } else if (keccak256(bytes(_district)) == keccak256(bytes("Jind"))) {
            return totalArea * 22;
        } else if (
            keccak256(bytes(_district)) == keccak256(bytes("Fatehabad"))
        ) {
            return totalArea * 22;
        } else if (
            keccak256(bytes(_district)) == keccak256(bytes("Mahendragarh"))
        ) {
            return totalArea * 22;
        } else if (
            keccak256(bytes(_district)) == keccak256(bytes("Kurukshetra"))
        ) {
            return totalArea * 25;
        } else if (keccak256(bytes(_district)) == keccak256(bytes("Karnal"))) {
            return totalArea * 25;
        } else if (keccak256(bytes(_district)) == keccak256(bytes("Panipat"))) {
            return totalArea * 25;
        } else if (keccak256(bytes(_district)) == keccak256(bytes("Sonipat"))) {
            return totalArea * 25;
        } else if (
            keccak256(bytes(_district)) == keccak256(bytes("Faridabad"))
        ) {
            return totalArea * 25;
        } else if (keccak256(bytes(_district)) == keccak256(bytes("Kaithal"))) {
            return totalArea * 25;
        } else if (keccak256(bytes(_district)) == keccak256(bytes("Nuh"))) {
            return totalArea * 20;
        } else if (keccak256(bytes(_district)) == keccak256(bytes("Bhiwani"))) {
            return totalArea * 17;
        } else if (
            keccak256(bytes(_district)) == keccak256(bytes("Charkhi Dadri"))
        ) {
            return totalArea * 17;
        } else if (keccak256(bytes(_district)) == keccak256(bytes("Sirsa"))) {
            return totalArea * 24;
        } else {
            return 0;
        }
    }
}