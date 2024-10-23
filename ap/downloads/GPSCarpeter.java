/*
 * The MIT License
 *
 * Copyright 2016 dwheadon.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package karelthecarpeter;

import javafx.scene.paint.Color;

/**
 * A carpeter that knows where it's at and can go to another location (assuming
 * there's nothing in its way)
 *
 * @author dwheadon
 */
public class GPSCarpeter extends SensibleCarpeter {

    /**
     * Create a GPSCarpeter
     *
     * @param name The name of the carpeter
     * @param latitude The latitude where it gets delivered
     * @param longitude The longitude where it gets delivered
     * @param direction The direction it is facing when it's delivered
     * @param rugs The number of rugs it has when it's delivered
     */
    public GPSCarpeter(World w, String name, int latitude, int longitude, Direction direction, int rugs) {
        super(w, name, latitude, longitude, direction, rugs);
    }

    /**
     * Create a GPSCarpeter
     *
     * @param latitude The latitude where it gets delivered
     * @param longitude The longitude where it gets delivered
     * @param direction The direction it is facing when it's delivered
     * @param rugs The number of rugs it has when it's delivered
     */
    public GPSCarpeter(World w, int latitude, int longitude, Direction direction, int rugs) {
        super(w, latitude, longitude, direction, rugs);
    }

    /**
     * Create a GPSCarpeter with a specific color
     *
     * @param name The name of the carpeter
     * @param latitude The latitude where it gets delivered
     * @param longitude The longitude where it gets delivered
     * @param direction The direction it is facing when it's delivered
     * @param rugs The number of rugs it has when it's delivered
     * @param shirtColor Not currently implemented: does nothing
     */
    public GPSCarpeter(World w, String name, int latitude, int longitude, Direction direction, int rugs, Color shirtColor) {
        super(w, name, latitude, longitude, direction, rugs, shirtColor);
    }

    /**
     * Create a GPSCarpeter with a specific color
     *
     * @param latitude The latitude where it gets delivered
     * @param longitude The longitude where it gets delivered
     * @param direction The direction it is facing when it's delivered
     * @param rugs The number of rugs it has when it's delivered
     * @param shirtColor Not currently implemented: does nothing
     */
    public GPSCarpeter(World w, int latitude, int longitude, Direction direction, int rugs, Color shirtColor) {
        super(w, latitude, longitude, direction, rugs, shirtColor);
    }

    /**
     * Turn left 3 times (ends up pointing to the right)
     */
    public void turnRight() {
        turnLeft();
        turnLeft();
        turnLeft();
    }

    /**
     * Turn to face the North regardless of the current heading
     */
    public void faceNorth() {
        while (!facingNorth()) {
            turnLeft();
        }
    }

    /**
     * Turn to face the South regardless of the current heading
     */
    public void faceSouth() {
        while (!facingSouth()) {
            turnLeft();
        }
    }

    /**
     * Turn to face the East regardless of the current heading
     */
    public void faceEast() {
        while (!facingEast()) {
            turnLeft();
        }
    }

    /**
     * Turn to face the West regardless of the current heading
     */
    public void faceWest() {
        while (!facingWest()) {
            turnLeft();
        }
    }

    /**
     * Go to a specific position (assuming there's nothing in the way). The
     * resulting heading is <b>not</b> guaranteed.
     *
     * @param latitude The latitude to go to
     * @param longitude The longitude to go to
     */
    public void goTo(int latitude, int longitude) {
        while (this.latitude > 1 && this.latitude > latitude) {
            faceSouth();
            move();
        }
        while (this.latitude < latitude) {
            faceNorth();
            move();
        }
        while (this.longitude > 1 && this.longitude > longitude) {
            faceWest();
            move();
        }
        while (this.longitude < longitude) {
            faceEast();
            move();
        }
    }
    
    public int getLatitude() {
        return this.latitude;
    }

    public int getLongitude() {
        return this.longitude;
    }
    
    public Direction getDirection() {
        return this.direction;
    }

    public World getWorld() {
        return this.world;
    }
}
