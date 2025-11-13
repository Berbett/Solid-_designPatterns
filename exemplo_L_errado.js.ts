class bird {
    fly() {
        return true;
    };
};

class duck extends bird {};

class ostrige extends bird {
    fly() {
        return false;
    }
};
