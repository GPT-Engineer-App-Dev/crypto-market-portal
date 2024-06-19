import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-gray-200">
        <nav className="flex space-x-6">
          <a href="#" className="font-bold text-black">Markets</a>
          <a href="#" className="font-bold text-black">Blog</a>
          <a href="#" className="font-bold text-black">Explore</a>
          <a href="#" className="font-bold text-black">Learn</a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span>ETH Gas</span>
            <Badge variant="outline">45 Gwei</Badge>
          </div>
          <Switch />
          <a href="#" className="text-black">Login</a>
          <Button variant="default" className="bg-blue-violet text-white">Sign up</Button>
        </div>
      </header>

      {/* Teaser Area */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-black">Today's Cryptocurrency Market Situation</h1>
        <p className="text-gray-600 mt-4">Stay updated with the latest trends and insights in the crypto world.</p>
        <div className="flex justify-center mt-10">
          <Card className="w-1/3">
            <CardContent className="flex flex-col items-center">
              <div className="relative w-24 h-12 border-b-4 border-gray-300 rounded-b-full"></div>
              <span className="text-4xl font-bold text-green-500 mt-4">87</span>
              <span className="text-gray-600">Extreme greed</span>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Market Data */}
      <section className="px-6 py-16">
        <h2 className="text-2xl font-bold text-black mb-6">Market Data</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>1h%</TableHead>
              <TableHead>24%</TableHead>
              <TableHead>7d%</TableHead>
              <TableHead>Market Cap</TableHead>
              <TableHead>Volume (24h)</TableHead>
              <TableHead>Circulating Supply</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Example row */}
            <TableRow>
              <TableCell>Bitcoin</TableCell>
              <TableCell>$50,000</TableCell>
              <TableCell className="text-green-500">+0.5%</TableCell>
              <TableCell className="text-red-500">-1.2%</TableCell>
              <TableCell className="text-green-500">+3.4%</TableCell>
              <TableCell>$1T</TableCell>
              <TableCell>$50B</TableCell>
              <TableCell>18.7M BTC</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      {/* Content Cards */}
      <section className="px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>✨Top News</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <Avatar className="mr-4">
                <AvatarImage src="https://source.unsplash.com/random/100x100?crypto" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <CardDescription>Latest top news in the crypto world.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>🔥 Hot right now</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <span>Bitcoin</span>
                <span className="text-green-500">+5.2%</span>
              </div>
              <div className="flex justify-between">
                <span>Ethereum</span>
                <span className="text-red-500">-2.3%</span>
              </div>
              <div className="flex justify-between">
                <span>Cardano</span>
                <span className="text-green-500">+8.1%</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>🎙️ Market Whispers</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <Avatar className="mr-4">
                <AvatarImage src="https://source.unsplash.com/random/100x100?crypto" />
                <AvatarFallback>MW</AvatarFallback>
              </Avatar>
              <CardDescription>Latest podcast episode about market trends.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
          <div>
            <h3 className="font-bold text-gray-600">Explore</h3>
            <ul className="mt-4 space-y-2">
              <li className="font-bold text-black">Home</li>
              <li className="font-bold text-black">Markets</li>
              <li className="font-bold text-black">News</li>
              <li className="font-bold text-black">Learn</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-600">Tools</h3>
            <ul className="mt-4 space-y-2">
              <li className="font-bold text-black">Portfolio</li>
              <li className="font-bold text-black">Calculator</li>
              <li className="font-bold text-black">Converter</li>
              <li className="font-bold text-black">API</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-600">Support</h3>
            <ul className="mt-4 space-y-2">
              <li className="font-bold text-black">Help Center</li>
              <li className="font-bold text-black">Contact Us</li>
              <li className="font-bold text-black">FAQ</li>
              <li className="font-bold text-black">Terms of Service</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-600">Company</h3>
            <ul className="mt-4 space-y-2">
              <li className="font-bold text-black">About Us</li>
              <li className="font-bold text-black">Careers</li>
              <li className="font-bold text-black">Press</li>
              <li className="font-bold text-black">Blog</li>
            </ul>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex justify-between items-center px-6 text-gray-600">
          <span>&copy; 2023 CryptoMarket. All rights reserved.</span>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600">Facebook</a>
            <a href="#" className="text-gray-600">Twitter</a>
            <a href="#" className="text-gray-600">LinkedIn</a>
            <a href="#" className="text-gray-600">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;