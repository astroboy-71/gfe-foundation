"use client"

import { Button } from "@nextui-org/button"
import { Card, CardBody, CardHeader } from "@nextui-org/card"
import { Select, SelectItem } from "@nextui-org/select"

interface MiningPlanProps {}

export default function MiningPlan({}: MiningPlanProps) {
  return (
    <Card className="mx-auto my-1 w-full max-w-[320px] p-4" shadow="sm">
      <CardHeader className="flex items-start gap-2 text-left">
        <p className="font-semibold">Mining Plan</p>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-3">
          <Select
            labelPlacement="outside"
            label="Miner Type"
            placeholder="Select a miner"
            className="w-full"
          >
            <SelectItem key="1" value="en">
              sdf
            </SelectItem>
          </Select>
          <Select
            labelPlacement="outside"
            label="Power"
            placeholder="Select a power"
            className="w-full"
          >
            <SelectItem key="1" value="en">
              sdf
            </SelectItem>
          </Select>
          <Select
            labelPlacement="outside"
            label="Mining Period"
            placeholder="Select a power"
            className="w-full"
          >
            <SelectItem key="1" value="en">
              sdf
            </SelectItem>
          </Select>
        </div>
        <Button
          type="submit"
          color="primary"
          className="mt-8 w-full bg-gradient-to-r from-[#2D79FF] to-[#22B4FD] font-goldman"
        >
          Start Mining
        </Button>
      </CardBody>
    </Card>
  )
}
